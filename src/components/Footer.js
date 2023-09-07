import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <h1>Footer</h1>
      <p>Copyright &copy; {currentYear} Krystle, Madi, Jia-Jia</p>
    </div>
  );
}

export default Footer;
