const Button = ({ wd, bgColor, text, textColor, wg, hg, lowOp, selectButton }) => {
    // USARE lowOp PER I PULSANTI CHE FANNO CAMBIARE PAGINA
    // USARE selectButton PER I PULSANTI A SCELTA MULTIPLA (Da fixare)
    const handleButtonClick = (event) => {
        if (lowOp) {
            event.target.style.opacity = 0.5;
        } else if (selectButton) {
            event.target.style.backgroundColor = 'yellow'
        }
    }

   return (
    // LO STILE DEL COMPONENT BUTTON VIENE GESTITO CON bgColor - wd - textColor - wg - hg
    // <Button text={''} textColor={''} bgColor={''} wd={''} hg={''} wg={''}/>
    <button
       onClick={handleButtonClick}
      style={{
        backgroundColor: bgColor,
        width: wd,
        color: 'rgb(54,71,100)',
        fontWeight: wg,
        borderRadius: "0.8em",
        height: hg,
        border: "none",
        cursor: 'pointer',
      }}
    >
      {text}
    </button>
  );
};

export default Button;
