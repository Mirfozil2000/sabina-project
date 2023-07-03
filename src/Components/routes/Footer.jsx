import React from "react"
import "./Footer.css";

const Footer = () => {
    return (
        <>
            <div class="footer-basic">
                <footer>
                    <div class="social">
                        <a href="#"><box-icon type='logo' name='facebook'></box-icon></a>
                        <a href="#"><box-icon type='logo' name='instagram'></box-icon></a>
                        <a href="#"><box-icon name='telegram' type='logo' ></box-icon></a>
                    </div>
                    
                    <ul class="list-inline">
                        <li class="list-inline-item"><a href="#">Главное</a></li>
                        <li class="list-inline-item"><a href="#">Сервисы</a></li>
                        <li class="list-inline-item"><a href="#">О нас</a></li>
                    </ul>
                    <p class="copyright">MasterSan.Tex © 2023</p>
                </footer>
            </div>
        </>
    )
}

export default Footer
