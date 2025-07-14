import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { nome, email, mensagem } = await req.json();

    if (!nome || !email || !mensagem) {
      return Response.json({ success: false, error: "Campos obrigatórios faltando." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_REMETENTE,
        pass: process.env.EMAIL_SENHA_APP,
      },
    });

    const mailOptions = {
      from: `"${nome}" <${email}>`,
      to: process.env.EMAIL_DESTINO,
      subject: `Nova mensagem de contato de ${nome}`,
      text: `Mensagem:\n${mensagem}\n\nContato: ${email}`,
    };

    await transporter.sendMail(mailOptions);
    return Response.json({ success: true });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error); // <- Mostra erro no terminal
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}
