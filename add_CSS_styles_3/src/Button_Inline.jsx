function Button(){

    const styles = {
        backgroundColor: "rgba(255, 93, 93, 1)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer"
    }

    // JavaScript/JSX uses camel-style, can't use dashes like in css, important to remove dashes

    return(
        <button style={styles}>Click me</button>
    );
}

export default Button