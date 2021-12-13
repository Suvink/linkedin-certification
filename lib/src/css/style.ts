const styles = {
    button: {
        display: "inline-block",
        margin: "0",
        padding: "0.75rem 1rem",
        border: "0",
        borderRadius: "0.317rem",
        backgroundColor: "#0077b5",
        color: "#fff",
        textDecoration: "none",
        fontWeight: "700",
        fontSize: "1rem",
        lineHeight: "1.5",
        fontFamily: "inherit",
        cursor: "pointer",
        WebkitAppearance: "none",
        WebkitFontSmoothing: "antialiased",
        position: "relative",
        top: "-0.1em",
        verticalAlign: "middle",
        marginRight: "0.317rem",
        ":hover": {
            opacity: 0.5
        },
        "&:active": {
            boxShadow: "inset 0 3px 4px hsla(0, 0%, 0%, 0.2)"
        },
        "&:focus": {
            outline: "5px auto -webkit-focus-ring-color",
            outlineOffset: "-2px"
        },

    },
    icon: {
        fill: "#fff",
        marginRight: "10px"
    }
} as const

export default styles;