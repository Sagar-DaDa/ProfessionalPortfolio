// const Themes = {
//     greenTheme : {
//         backgroundColorMain: {backgroundColor: '#6a994e'},//
//         backgroundColorDark: {backgroundColor: '#386641'},
//         backgroundColorMuted: {backgroundColor: '#a7c957'},
//         backgroundColorOptional: {backgroundColor: '#bc4749'},
//         textColorMain: {color: '#6a994e'},
//         textColorDark: {color: '#386641'},
//         textColorMuted: {color: '#a7c957'},
//         textColorLight: {color: '#f2e8cf'},//
//         border: {border: '1px solid #6a994e'},
//         styleClass: {
//             buttonBg: 'green-gradient-btn',
//             buttonRBg: 'r-green-gradient-btn', //1
//             buttonBgOpt1: 'cool-gradient-btn'
//         }

//     }
// }
const Themes = {
    greenTheme: {
        textColorStandard: { color: '#6a994e' },
        textColorLight: { color: '#f2e8cf' },
        textColorDark: { color: '#212529' },
        
        borderAll: { border: "1px solid rgba(128, 128, 128, 0.50)" },
        borderTopOnly: { borderTop: "1px solid rgba(128, 128, 128, 0.50)" },
        borderBottomOnly: { borderBottom: "1px solid rgba(128, 128, 128, 0.50)" },
        borderLeftOnly: { borderLeft: "1px solid rgba(128, 128, 128, 0.50)" },
        borderRightOnly: { borderRight: "1px solid rgba(128, 128, 128, 0.50)" },
        
        boxShadowAll: {boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"},

        backgroundStandard: { backgroundImage: "radial-gradient( circle farthest-corner at 50.4% 50.5%, rgba(167, 201, 87, 1) 0%, rgba(106, 153, 78, 1) 90%" },
        backgroundTransparent: { backgroundImage: "radial-gradient( circle farthest-corner at 10% 20%,  rgba(234,249,249,0.20) 0.1%, rgba(239,249,251,0.20) 90.1% )" },
        backgroundExtra: { backgroundImage: "linear-gradient( 106.8deg,  rgb(65, 60, 60) 6%, rgb(112, 103, 103) 47.6%, rgb(65,60,60) 87.8% )" },
        
        buttonStandard: {
            color: "#f2e8cf",
            border: "1px solid rgba(128, 128, 128, 0.5)",
            backgroundImage: "radial-gradient( circle farthest-corner at 32.7% 82.7%, rgba(167, 201, 87, 1) 8.3%, rgba(106, 153, 78, 1) 79.4% )",
            transition: 'background-image 0.3s ease, color 0.3s ease',
            cursor: "pointer",
        },
        buttonStandardHovered: {
            color: "#f2e8cf",
            border: "1px solid rgba(128, 128, 128, 0.5)",
            backgroundImage: "radial-gradient( circle farthest-corner at 32.7% 82.7%, rgba(106, 153, 78, 1) 8.3%, #386641 79.4% )",
        },
        buttonDark: {
            color: "#f2e8cf",
            border: "1px solid rgba(128, 128, 128, 0.5)",
            backgroundImage: "radial-gradient( circle farthest-corner at 32.7% 82.7%, rgba(106, 153, 78, 1) 8.3%, #386641 79.4% )",
            transition: 'background-image 0.3s ease, color 0.3s ease',
            cursor: "pointer",
        },
        buttonDarkHovered: {
            color: "#f2e8cf",
            border: "1px solid rgba(128, 128, 128, 0.5)",
            backgroundImage: "radial-gradient( circle farthest-corner at 32.7% 82.7%, rgba(167, 201, 87, 1) 8.3%, rgba(106, 153, 78, 1) 79.4% )",
            color: "red",
        },
        buttonExtra: {
            color: '#f2e8cf',
            border: '1px solid rgba(128, 128, 128, 0.5)',
            backgroundImage: 'linear-gradient(106.8deg, rgb(65, 60, 60) 6%, rgb(112, 103, 103) 47.6%, rgba(65,60,60) 87.8%)',
            transition: 'background-image 0.3s ease, color 0.3s ease',
            cursor: 'pointer'
        },
        buttonExtraHovered: {
            color: '#f2e8cf',
            border: '1px solid rgba(128, 128, 128, 0.5)',
            backgroundImage: 'radial-gradient(circle farthest-corner at 32.7% 82.7%, rgba(167, 201, 87, 1) 8.3%, rgba(106, 153, 78, 1) 79.4%)',
            transition: 'background-image 0.3s ease, color 0.3s ease',
            cursor: 'pointer',
        },
    }
}

export default Themes;