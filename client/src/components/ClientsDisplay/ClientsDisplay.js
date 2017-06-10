import React from 'react';
import styled from 'styled-components';
import ClientContainer from '../../containers/ClientContainer';
import Title from '../Title/Title';

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Clients = styled.div`
  display: flex;
  flex-direction: column;
`;

class ClientsDisplay extends React.Component {
  componentDidMount() {
    this.props.getClients();
  }

  renderClientList() {
    return (
      <Clients>
          {
            this.props.clients.map(function(client) {
              return <ClientContainer client={client} />
            })
          }
      </Clients>
    );
  }

  render() {
    return (
        <Body>
          <Title>Mes clients</Title>
          {
            this.props.loading ? <p></p> : this.renderClientList()
          }
        </Body>
    );
  }
};

export default ClientsDisplay;
