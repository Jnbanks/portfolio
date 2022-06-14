import React from 'react';
import '../styles/style.css';

function Footer() {
    return (
        <ul class="contactul">
            <li class="contactli">
                {/* github */}
                <a href="https://github.com/Jnbanks" target="no_blank">GitHub</a>
            </li>
            <li class="contactli">
                {/* linkedin */}
                <a href="https://www.linkedin.com/in/jonathan-banks-bb0a23105/" target="no_blank">LinkedIn</a>
            </li>
            <li class="contactli">
                {/* stack overflow */}
                <a href="https://stackoverflow.com/users/17605311/jonathan-banks" target="no_blank">StackOverflow</a>
            </li>
        </ul>
    )
}

export default Footer;