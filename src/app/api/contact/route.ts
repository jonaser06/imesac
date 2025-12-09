import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nombre, empresa, email, telefono, servicio, mensaje } = body;

    // Validación básica
    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        { error: "Faltan campos requeridos" },
        { status: 400 }
      );
    }

    // Configuración del transportador SMTP de Zoho Mail
    const transporter = nodemailer.createTransport({
      host: process.env.ZOHO_SMTP_HOST || "smtp.zoho.com",
      port: parseInt(process.env.ZOHO_SMTP_PORT || "465"),
      secure: true, // true para puerto 465, false para otros puertos
      auth: {
        user: process.env.ZOHO_EMAIL_USER, // Tu email de Zoho
        pass: process.env.ZOHO_EMAIL_PASSWORD, // Tu contraseña de Zoho o App Password
      },
    });

    // Contenido del email
    const mailOptions = {
      from: `"Formulario Web IMESAC" <${process.env.ZOHO_EMAIL_USER}>`,
      to: process.env.ZOHO_EMAIL_TO || "proyectos@imesac.com", // Email(s) destino
      replyTo: email, // Para que puedas responder directamente al cliente
      subject: `Nuevo mensaje de contacto - ${nombre}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #d09706 0%, #f0a500 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { background: #f9f9f9; padding: 30px; border: 1px solid #ddd; }
              .field { margin-bottom: 20px; }
              .label { font-weight: bold; color: #d09706; display: block; margin-bottom: 5px; }
              .value { background: white; padding: 10px; border-left: 3px solid #d09706; }
              .footer { background: #333; color: white; padding: 20px; text-align: center; border-radius: 0 0 10px 10px; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Nuevo Mensaje de Contacto</h1>
                <p>Formulario Web - IMESAC</p>
              </div>
              <div class="content">
                <div class="field">
                  <span class="label">Nombre:</span>
                  <div class="value">${nombre}</div>
                </div>

                ${
                  empresa
                    ? `
                <div class="field">
                  <span class="label">Empresa:</span>
                  <div class="value">${empresa}</div>
                </div>
                `
                    : ""
                }

                <div class="field">
                  <span class="label">Email:</span>
                  <div class="value"><a href="mailto:${email}">${email}</a></div>
                </div>

                ${
                  telefono
                    ? `
                <div class="field">
                  <span class="label">Teléfono:</span>
                  <div class="value"><a href="tel:${telefono}">${telefono}</a></div>
                </div>
                `
                    : ""
                }

                ${
                  servicio
                    ? `
                <div class="field">
                  <span class="label">Servicio de Interés:</span>
                  <div class="value">${servicio}</div>
                </div>
                `
                    : ""
                }

                <div class="field">
                  <span class="label">Mensaje:</span>
                  <div class="value">${mensaje.replace(/\n/g, "<br>")}</div>
                </div>
              </div>
              <div class="footer">
                <p>Este mensaje fue enviado desde el formulario de contacto de www.imesac.com</p>
                <p>Fecha: ${new Date().toLocaleString("es-PE", { timeZone: "America/Lima" })}</p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
        Nuevo mensaje de contacto - IMESAC

        Nombre: ${nombre}
        ${empresa ? `Empresa: ${empresa}` : ""}
        Email: ${email}
        ${telefono ? `Teléfono: ${telefono}` : ""}
        ${servicio ? `Servicio de Interés: ${servicio}` : ""}

        Mensaje:
        ${mensaje}

        ---
        Enviado desde el formulario de contacto de www.imesac.com
        Fecha: ${new Date().toLocaleString("es-PE", { timeZone: "America/Lima" })}
      `,
    };

    // Enviar email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email enviado exitosamente" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error al enviar email:", error);
    return NextResponse.json(
      {
        error: "Error al enviar el mensaje",
        details: error instanceof Error ? error.message : "Error desconocido",
      },
      { status: 500 }
    );
  }
}
