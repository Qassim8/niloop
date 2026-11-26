// Extra testimonials, e.g. messages collected from clients on WhatsApp.
//
// How to add one:
//  1. Ask the client for permission to publish their message (a short WhatsApp message is enough),
//     and ask how they want to be named: full name + role, or just "Client – store owner".
//  2. Add an entry below. Copy the client's words as they wrote them; fix only obvious typos.
//     Provide `ar` and, if possible, `en` (the Arabic text is shown on the Arabic site and,
//     if `en` is missing, on the English site too).
//  3. Optional: save a photo of the person (with permission) as public/images/slots/person-<id>.webp
//     (see public/images/slots/README.md) and a blurred screenshot of the chat as
//     public/images/testimonials/<id>.webp (hide the phone number and profile photo).
//
// The six testimonials already in messages/*.json (namespace "Testimonials") keep working;
// entries here are added after them.
export const extraTestimonials = [
  // {
  //   id: "client-1",
  //   name: { ar: "اسم العميل", en: "Client name" },       // optional
  //   role: { ar: "صاحب متجر ملابس", en: "Fashion store owner" },
  //   text: { ar: "نص الرسالة كما كتبها العميل.", en: "The message as the client wrote it." },
  //   source: "whatsapp",                                   // shows a small "via WhatsApp" label
  // },
];
