import React from "react";

// import social data
import { social } from "../data";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-primary text-white min-h-[732px] section"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-primary font-extrabold mb-4">
          Entre em contato
        </h2>
        <p className="max-w-[540px] mx-auto px-6 lg:px-0 mb-[64px]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero,
          doloremque! Quisquam in eaque labore temporibus rerum maiores at
          aspernatur deleniti.
        </p>
        {/* form */}
        <form className="px-8 lg:px-0 max-w-[600px] mx-auto flex flex-col space-y-6 mb-[46px]">
          <input
            className="form-control"
            type="text"
            placeholder="Nome completo"
          />
          <input
            className="form-control"
            type="email"
            placeholder="Seu melhor email"
          />
          <textarea
            className="textarea"
            placeholder="Digite sua mensagem"
          ></textarea>
          <button className="btn bg-accent hover:bg-accent-hover transition-all">
            Enviar mensagem
          </button>
        </form>
        {/* socials */}
        <div className="flex items-center justify-between max-w-[205px] mx-auto">
          {social.map((item, index) => {
            return (
              <a href="/">
                <img src={item.icon} alt="Social Icon" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
