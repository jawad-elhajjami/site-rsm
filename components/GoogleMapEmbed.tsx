"use client";

export default function GoogleMapEmbed() {
  return (
    <div className="w-full h-[450px] overflow-hidden rounded-md">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.5318688003463!2d-6.5909305237888685!3d34.24647570744857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda759f9cb8abb07%3A0xd57193fc3b561ccf!2sFaculty%20of%20sciences!5e1!3m2!1sen!2sma!4v1748792342733!5m2!1sen!2sma"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
