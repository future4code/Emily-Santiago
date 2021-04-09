import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const MatchPage = (prop) => {
    const [matchList, setMatchList] = useState([]);

    useEffect(() => {
        getMatches();
    }, []);

    const getMatches = () => {
        axios
            .get(
                "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/matches"
            )
            .then((res) => {
                console.log(res.data.matches);
                setMatchList(res.data.matches);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const resetMatchs = () => {
        axios
            .put(
                "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/clear"
            )
            .then((res) => {
                console.log(res);
                setMatchList([]);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <Background>
                <button onClick={() => prop.page("listMatch")}>Lista de matchs</button>
                {matchList.map((match) => {
                    return (
                        <div key={match.id}>
                            <matchCard>
                                <ImagemPerfil src={match.photo} alt="Perfil" />
                                <span>{match.name}</span>
                            </matchCard>
                        </div>
                    );
                })}
                <button onClick={() => resetMatchs()}>RESET</button>
            </Background>
        </div>
    );
};

export default MatchPage;

const Background = styled.div`
  width: auto;
  height: 80vh;
  display: flex;
  flex-direction: column;
`;

const matchCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ImagemPerfil = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 25px;
  margin-right: 20px;
`;
