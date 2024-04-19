import styled from "styled-components";
import Block from "../../components/Block";
import Title from "../../components/Title";
import Item from "../../components/Item";
import Carregando from "../../components/Loading";
import { MesoProps, RegiaoProps, UfProps } from "../../types";
import useIbge from "../../hooks/useIbge";


export default function Principal() {
  const { regioes, getUfs } = useIbge();
  const { ufs, loadingUfs, getMesos } = useIbge();
  const { mesorregioes, loadingMesos } = useIbge();

  const regiaoitemloading = regioes.map((regiao: RegiaoProps) => (
    <Item key={regiao.id} get={() => getUfs(regiao.id)}>
      {regiao.nome}
    </Item>
  ));

  const estadoitemloading = ufs.map((uf: UfProps) => (
    <Item key={uf.id} get={() => getMesos(uf.sigla)}>
      {uf.nome}
    </Item>
  ));

  const mesoitemloading = mesorregioes.map((mesos: MesoProps) => (
    <Item key={mesos.id} get={() => console.log(mesos.uf, mesos.nome)}>
      {mesos.nome}
    </Item>
  ));

  return (
    <WrapperSld>
      <Block>
        <Title>Regiões</Title>
          {regioes.length !== 0 ? regiaoitemloading : <Carregando />}
      </Block>
      <Block>
        <Title>Estados</Title>
          {loadingUfs ? <Carregando />: estadoitemloading }
      </Block>
      <Block>
        <Title>Mesorregiões</Title>
          {loadingMesos ? <Carregando /> : mesoitemloading }
      </Block>
    </WrapperSld>
  );
}

const WrapperSld = styled.div`
  display: flex;
`;