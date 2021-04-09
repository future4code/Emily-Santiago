import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
//import {XCircle} from @styled-icons/octicons/XCircle

const ListMatchPage = (prop) => {
    const [profile, setprofile] = useState("");

    useEffect(() => {
        getProfileToChoose();
    }, []);

    const getProfileToChoose = () => {
        axios
            .get(
                "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person"
            )
            .then((res) => {
                setprofile(res.data.profile);
                console.log(res.data.profile);
            })
            .catch((err) => {
                console.log(err);
                alert(err);
            });
    };

    const ChoosePerson = (event) => {
        axios
            .post(
                "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-person",
                {
                    id: profile.id,
                    choice: event
                }
            )
            .then((res) => {
                console.log(res.data);
                getProfileToChoose();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <ContainerInfo>
                <Header>
                    <Logo>ASTROMATCH</Logo>
                    <button onClick={() => prop.page("match")}>
                        Paguina de curtidas
          </button>
                </Header>
                <hr />
                <ImagemPerfil src={profile.photo} alt="Foto do perfil" />
                <hr />
                <ContainerTextoPerfil>
                    <ProfileName>
                        {profile.name}, {profile.age}
                    </ProfileName>
                    <Description>{profile.bio}</Description>
                </ContainerTextoPerfil>
            </ContainerInfo>
            <MenuLike>
                <button onClick={() => ChoosePerson(false)}>X</button>
                <button onClick={() => ChoosePerson(true)}>C</button>
            </MenuLike>
        </div>
    );
};

export default ListMatchPage;

const ContainerInfo = styled.div`
  background-color: white;
  width: auto;
  height: 80vh;
  margin: 8px;
`;

const ImagemPerfil = styled.img`
  height: 380px;
  width: 380px;
`;

const ContainerTextoPerfil = styled.div`
  margin-right: 10px;
  text-align: left;
`;

const Description = styled.p`
  color: gray;
  font-size: 12px;
  margin: 0;
`;

const ProfileName = styled.p`
  color: gray;
  font-size: 15px;
  margin: 0 0 4px 0;
  font-weight: 600;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Logo = styled.p`
  color: #ff3300;
  font-size: 15px;
  font-weight: 600;
`;

const MenuLike = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  justify-content: space-evenly;
`;
