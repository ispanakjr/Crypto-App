import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Typography,
  TextField,
} from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";
// import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  pokodexContainer: {
    paddingTop: "20px",
    paddingLeft: "50px",
    paddingRight: "50px",
  },
  cardMedia: {
    margin: "auto",
  },
  cardContent: {
    textAlign: "center",
  },
  searchContainer: {
    display: "flex",
    backgroundColor: fade(theme.palette.common.white, 0.15),
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingTop: "0",
    paddingButtom: "0",
  },
  searchIcon: {
    alignSelf: "flex-end",
    marginBottom: "5px",
  },
  searchInput: {
    width: "200px",
    margin: "5px",
  },
}));

const Pokedex = (props) => {
  const classes = useStyles();
  const { history } = props;
  const [pokemonData, setPokemonData] = useState({});
  const [pokeFilter, setPokeFilter] = useState("");

  const handleFilter = (e) => {
    setPokeFilter(e.target.value);
  };

  useEffect(() => {
    const getPokemonData = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?offset=0&limit=200"
        );
        const { data } = response;
        const { results } = data;
        console.log(response);

        const pokemonReducer = (prevValue, currentValue, index) => {
          const pokeList = {
            id: index + 1,
            name: currentValue.name,
            sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              index + 1
            }.png`,
          };
          const newPokeList = { ...prevValue, [index + 1]: pokeList };
          return newPokeList;
        };
        const newPokemonData = results.reduce(pokemonReducer, {});
        setPokemonData(newPokemonData);
      } catch (err) {
        setPokemonData(false);
      }
    };
    getPokemonData();
  }, []);

  const getPokemonCard = (pokemonId) => {
    const { id, name, sprite } = pokemonData[pokemonId];

    return (
      <Grid item xs={12} sm={4}>
        <Card onClick={() => history.push(`/pokemon-app/${pokemonId}`)}>
          <CardMedia
            className={classes.cardMedia}
            image={sprite}
            style={{ width: "130px", height: `130px` }}
          />
          <CardContent className={classes.cardContent}>
            <Typography>{`${id}.${name}`}</Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.searchContainer}>
            <SearchIcon className={classes.searchIcon} />
            <TextField
              onChange={handleFilter}
              className={classes.searchInput}
              label="Search Pokemon"
            />
          </div>
        </Toolbar>
      </AppBar>
      {pokemonData ? (
        <Grid container spacing={3} className={classes.pokodexContainer}>
          {Object.keys(pokemonData).map(
            (pokemonId) =>
              pokemonData[pokemonId].name.includes(pokeFilter) &&
              getPokemonCard(pokemonId)
          )}
        </Grid>
      ) : (
        <div>
          <CircularProgress />
        </div>
      )}
    </>
  );
};

export default Pokedex;
