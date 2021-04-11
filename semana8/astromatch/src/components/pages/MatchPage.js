import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineHome, AiFillHome } from "react-icons/ai";
import { BsTrash, BsTrashFill } from "react-icons/bs";

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
                <AiOutlineHome size="1.5em" onClick={() => prop.page("listMatch")}>Lista de matchs</AiOutlineHome>
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
                <BsTrash size="1.5em" onClick={() => resetMatchs()}></BsTrash>
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
