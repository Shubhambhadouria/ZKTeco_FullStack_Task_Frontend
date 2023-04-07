import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme)=>({
    container : {
        padding : theme.spacing(8, 0, 6)
    },
    cardGrid : {
        paddingTop: '20px 0px'
    },
    card : {
        height: '100%',
        display : 'flex',
        flexDirection : 'column',
        marginTop : '50px',
        backgroundColor : 'black',
        color : 'white',
    },
    cardMedia : {
        paddingTop : '56.25%',
        width : '100%'
    },
    cardContent : {
        flexGrow : 1
    },
    footer : {
        backgroundColor : theme.palette.background.paper,
        padding : '50px 0px'
    },
    about : {
        marginLeft : '50px',
        cursor : 'pointer',
        textDecoration: 'none',
        color : 'white',
        '&:hover': {
            textDecoration : 'none' 
        },
    },
    aboutop : {
        '&:hover': {
            textDecoration : 'none' 
        },
    },
    homelink : {
        display : 'flex',
        textDecoration : 'none',
        color : 'white',
        '&:hover': {
            textDecoration : 'none' 
        },
    },
    login : {
        marginLeft : '85%',
        cursor : 'pointer'
    },
    loginicon : {
        cursor : 'pointer'
    },
    home : {
        cursor : 'pointer'
    },
    homeicon : {
        cursor : 'pointer',
        marginTop : '3px',
    },
    addbtn : {
        marginTop : '50px',
        fontWeight : 'bold',
        
    },
    cardaction : {
        display : 'flex',
        marginTop : '-75px',
        justifyContent: 'space-between',
        padding : '20px'
    },
    heading : {
        marginTop : '25px',
        marginBottom : '25px',
    },
    boxinput : {
        width : '40%',
        margin : 'auto'
    },
    movtitle : {
        fontStyle : 'bolder',
    },
    updatebtn : {
        height : '54px',
        fontWeight : 'bold'
    },
    submitbtn : {
        height : '54px',
        fontWeight : 'bold',
    }
}));

export default useStyles