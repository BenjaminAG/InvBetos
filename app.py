
from flask import Flask, render_template

app = Flask(__name__)

# === DATOS DEL EVENTO (EDITA SI LO REQUIERES) ===
FESTEJADO = "Alberto Hernández Aguilar"
FECHA_TEXTO = "29 de Noviembre"
MISA_HORA = "1:00 pm"
EVENT_DATETIME_ISO = "2025-11-29T13:00:00"  # AAAA-MM-DDTHH:MM:SS

PADRES = ["Abraham Hernández Sánchez", "Deisy Aguilar Garduño"]
PADRINOS = ["Gerardo Espinoza Godinines", "Ofelia Bautista Ruiz +"]

# WhatsApp RSVP (puedes cambiar el número)
WHATSAPP_NUMBER = "525645359602"  # 52 + 10 dígitos
RSVP_MSG = f"Hola, confirmo mi asistencia a los XV de {FESTEJADO}."
# ================================================

@app.route('/')
def index():
    return render_template(
        'index.html',
        festejado=FESTEJADO,
        fecha_evento=FECHA_TEXTO,
        misa_hora=MISA_HORA,
        evento_iso=EVENT_DATETIME_ISO,
        padres=PADRES,
        padrinos=PADRINOS,
        whatsapp_number=WHATSAPP_NUMBER,
        rsvp_msg=RSVP_MSG
    )

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
