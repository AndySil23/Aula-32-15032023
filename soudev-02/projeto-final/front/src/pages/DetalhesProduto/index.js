import { useParams } from 'react-router-dom';
import { Grid, Card, Stack } from '@mui/material';
import React from 'react'

import sapato1 from './IMG/sapato1.webp'
import sapato2 from './IMG/sapato2.webp'
import sapato3 from './IMG/sapato3.webp'
import sapato4 from './IMG/sapato4.webp'
import sapato5 from './IMG/sapato5.webp'
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

export default function DetalhesProduto() {
    const { id } = useParams();
    const [atual, setAtual] = React.useState(0);

    const imagens = [
        sapato1,
        sapato2,
        sapato3,
        sapato4,
        sapato5,
    ];

    const Items = () => {
        return imagens.map((cada, posicao) => {
            return (
            <Grid item xs={2.4}>
                <Card onClick={() => setAtual(posicao)}>
                    <img src={cada} width="100%" />
                </Card>
            </Grid>
            )
        });
    }

    function anterior() {
        if(atual === 0) {
            setAtual(imagens.length - 1);
        } else{
            setAtual(atual - 1);
        }
    }

    function proximo() {
        if(atual < imagens.length - 1) {
        setAtual(atual + 1);
    }else{
        setAtual(0);
    }
}



    return (
        <div>
            DetalhesProduto {id}
            <Grid container spacing={3}>
                <Grid item xs={7}>
                    <Card align="center">
                        <Stack direction="row" sx={{justifyContent: "space-between", alignItems: "center"}}>
                            <ChevronLeft sx={{fontSize: "60px"}} onClick={anterior} />

                            <img src={imagens[atual]} width="400px" />

                            <ChevronRight sx={{fontSize: "60px"}} onClick={proximo} />

                        </Stack>
                    </Card>

                    <Grid container spacing={2}>
                        <Items />
                    </Grid>
                </Grid>

                <Grid item xs={5}>
                    Informações
                </Grid>
            </Grid>
        </div>
    )
}