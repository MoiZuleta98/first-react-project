import React from "react";
import producto1 from "../assets/img/reloj1.jpg";
import producto2 from "../assets/img/reloj2.jpg";
import producto3 from "../assets/img/reloj3.jpg";
import producto4 from "../assets/img/reloj4.jpg";

function Producto() {
    return (
        <main class="productos">
            <h2 id="productos">Nuestros productos</h2>
            <article>
                <img src={producto1} alt="Reloj" />
                <h2>Lorem, ipsum.</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                    mollitia blanditiis natus dicta error, cum alias ipsam libero odio
                    impedit, fuga at dolore voluptatem illum pariatur cupiditate fugit,
                    ullam amet?
                </p>
                <h2>Precio: $450</h2>
                <button>Ver más</button>
            </article>
            <article>
                <img src={producto2} alt="Reloj" />
                <h2>Lorem, ipsum.</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                    mollitia blanditiis natus dicta error, cum alias ipsam libero odio
                    impedit, fuga at dolore voluptatem illum pariatur cupiditate fugit,
                    ullam amet?
                </p>
                <h2>Precio: $650</h2>
                <button>Ver más</button>
            </article>
            <article>
                <img src={producto3} alt="Reloj" />
                <h2>Lorem, ipsum.</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                    mollitia blanditiis natus dicta error, cum alias ipsam libero odio
                    impedit, fuga at dolore voluptatem illum pariatur cupiditate fugit,
                    ullam amet?
                </p>
                <h2>Precio: $945</h2>
                <button>Ver más</button>
            </article>
            <article>
                <img src={producto4} alt="Reloj" />
                <h2>Lorem, ipsum.</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                    mollitia blanditiis natus dicta error, cum alias ipsam libero odio
                    impedit, fuga at dolore voluptatem illum pariatur cupiditate fugit,
                    ullam amet?
                </p>
                <h2>Precio: $999</h2>
                <button>Ver más</button>
            </article>
        </main>
    );
}

export default Producto;
