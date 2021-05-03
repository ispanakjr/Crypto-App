import React, { useState, useEffect } from "react";
import { useParams, Link as RouterLink } from "react-router-dom";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";

import {
    Typography,
    Link,
    CircularProgress,
    Button,
    Grid,
    Card,
    CardContent,
    CardActions,
    CardMedia,
    CardHeader,
    Box,
    Avatar,

} from "@material-ui/core";
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles({
    card: {
        maxWidth: "500px",
        margin: "25px auto",
        borderRadius: '40px'
    },
    header: {
        textAlign: "center",
        textTransform: "capitalize"
    },
    image: {
        height: "220px",
        width: "220px",
        margin: 'auto'

    },
    recep: {
        alignSelf: "center"
    },
    avatar: {
        backgroundColor: red[500],
        margin: 0,

    },
    cardHeader: {
        padding: "30px 35px 25px 35px"
    },
    cagri: {
        margin: 0,
    },
    bolder: {
        fontWeight: "bold"
    },
    types: {
        textTransform: "uppercase",
    },
    pokeHeader: {
        margin: "10px auto 20px"
    }


});

const Pokemon = (props) => {
    const { history } = props;
    const { pokemonId } = useParams();
    console.log(pokemonId);

    const [pokemon, setPokemon] = useState(undefined);
    // console.log(pokemon);

    const classes = useStyles()


    useEffect(() => {
        const getPokemonById = async () => {
            try {
                const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
                setPokemon(data);
                console.log(data)

            }
            catch (err) {
                console.log(err, "Error")
            }
        }
        getPokemonById()


    }, [pokemonId])


    const getPokemonJSX = () => {
        const { name, id, species, weight, height, types, sprites } = pokemon;
        const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;



        return (

            <div className={classes.pokeContainer}>
                <Box boxShadow={24} className={classes.card}>
                    <Card variant="outlined" className={classes.card}>
                        <CardHeader className={classes.cardHeader} avatar={<Avatar className={classes.avatar}> {`${id}`} </Avatar>} classes={{ action: classes.recep, avatar: classes.cagri }} action={<Link underline="none" component={RouterLink} to="/"><Button variant="contained" color="secondary">Back Index</Button></Link>} title={<Typography className={classes.header} variant='h3'>{name}
                        </Typography>} />

                        <CardMedia className={classes.image} image={fullImageUrl} title="pokemon" ></CardMedia>
                        <CardContent className={classes.content}>
                            <Typography align="center" variant="h4" className={classes.pokeHeader}>Pokemon Info</Typography>
                            <Box mx={3}>
                                <Grid container >

                                    <Grid item xs={3}>

                                        <Typography className={classes.bolder}>{'Species: '}</Typography>
                                        <Typography className={classes.bolder}>Height:</Typography>
                                        <Typography className={classes.bolder}>Weight:</Typography>
                                    </Grid>
                                    <Grid item xs={9}>
                                        <Typography><Link color="inherit" href={species.url}>{species.name}</Link></Typography>

                                        <Typography>{height}</Typography>
                                        <Typography>{weight}</Typography>

                                    </Grid>
                                </Grid>
                            </Box>


                            <Typography variant="h6" align="center" > Types</Typography>

                            <Grid container justify="space-evenly" >
                                {types.map(({ type }) => {
                                    return (
                                        <Grid item >
                                            <Typography className={classes.types} color='secondary' display="inline" align="center" key={type.name}>{`${type.name} `}</Typography>
                                        </Grid>
                                    )
                                })}
                            </Grid>
                        </CardContent>
                    </Card>
                </Box>





            </div>
        )
    }



    return (
        <>
            {pokemon === undefined && <CircularProgress />}
            {pokemon !== undefined && pokemon && getPokemonJSX()}
            {pokemon === false && <Typography>Pokemon not found! <Link component={RouterLink} to="/"><Button variant="contained">Back Index</Button></Link>
            </Typography>}




        </>
    );

};

export default Pokemon;