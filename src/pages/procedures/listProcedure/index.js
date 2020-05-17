import React, { useState, useEffect } from 'react';
import Loading from '../../../components/Loading';
import { Container, Row, List, Item } from './styles';
import { TextField, Tooltip, makeStyles } from '@material-ui/core';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Creators as ProceduresActions } from '../../../store/ducks/procedure';
import { Tag } from './styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: '470px',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

function ListProcedure({ getProceduresRequest, procedureState, procedures, setProcedures, cleanProcedures }) {
  const classes = useStyles();
  const [proceduresOption, setProceduresOption] = useState([]);

  useEffect(() => {
    setProceduresOption(procedureState.procedures);
  }, [procedureState.procedures]);

  function handleAddProcedure(option) {
    if (procedures.includes(option)) {
      const newArray = procedures.filter((procedure) => procedure.id !== option.id);
      setProcedures(newArray);
    } else {
      setProcedures([...procedures, option]);
    }
  }

  function handleGetProcedure(name) {
    if (name && name.length >= 5) {
      getProceduresRequest(name);
    }

    if (name.length === 0) {
      setProceduresOption([]);
      cleanProcedures();
    }
  }

  return (
    <Container>
      <div className={classes.root}>
        {procedures.map((procedure) => (
          <Tooltip size={16} key={procedure.id} title={procedure.name} placement='top-start'>
            <Tag onClick={(e) => handleAddProcedure(procedure)}>{procedure.name}</Tag>
          </Tooltip>
        ))}
      </div>
      <Row></Row>
      <Row>
        <TextField onChange={(e) => handleGetProcedure(e.target.value)} id='find-procedure' label='Procedimento' />
      </Row>
      {procedureState.loading && <Loading />}
      <Row>
        <List>
          {proceduresOption.map((option) => (
            <Item
              key={option.id}
              onClick={(e) => handleAddProcedure(option)}
              className={'teste ' + (procedures.includes(option) ? 'selected' : '')}
            >
              <p>{option.name}</p>
              <span>{option.code}</span>
            </Item>
          ))}
        </List>
      </Row>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  procedureState: state.procedure,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(ProceduresActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListProcedure);
