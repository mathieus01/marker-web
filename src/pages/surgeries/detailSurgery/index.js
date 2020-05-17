import React from 'react';
import { FiEdit3, FiTrash, FiAlertTriangle, FiMapPin, FiCalendar, FiFileText, FiX } from 'react-icons/fi';
import { Container, Card, Title, Section, ProcedureItem, PhotoList } from './styles';
import moment from 'moment';

export default function DetailSurgery({ surgery, cancel, editSurgery, selected, setSelected }) {
  function handleEditSurgery() {
    editSurgery(true);
  }

  return (
    <Container className='fade' selected={selected}>
      <Card>
        <Title type={surgery.type}>
          <h1>Detalhes da cirurgia</h1>

          <div>
            <button onClick={(e) => handleEditSurgery()}>
              <FiEdit3 size={18} />
            </button>
            <button>
              <FiTrash size={18} />
            </button>
            <button onClick={(e) => setSelected(false)}>
              <FiX size={18} />
            </button>
          </div>
        </Title>
        <Section type={surgery.type}>
          <div>
            <label>
              <FiAlertTriangle size={22} />
              <span>{surgery.cause}</span>
            </label>
            <label>
              <FiMapPin size={22} />
              <span>{surgery.location}</span>
            </label>
            <label>
              <FiCalendar size={22} />
              <span>{surgery.date ? moment(surgery.date).format('DD/MM/YYYY') : 'Sem data'}</span>
            </label>
          </div>
          <div>
            <label>
              <FiFileText size={22} />
              <span>Relatorio da Cirurgia</span>
            </label>

            <small>{surgery.text_report ? surgery.text_report : 'Não Informado'}</small>
          </div>
        </Section>
      </Card>

      <Card>
        <Title type={surgery.type}>
          <h1>Procedimentos</h1>
        </Title>
        <Section type={surgery.type}>
          <ul>
            {surgery && surgery.procedures.length > 0 ? (
              surgery.procedures.map((procedure) => (
                <ProcedureItem key={procedure.id}>
                  <span>{procedure.name}</span>
                  <small>{procedure.code}</small>
                </ProcedureItem>
              ))
            ) : (
              <div>
                <label>
                  <span>Nenhum procedimento cadastrado</span>
                </label>
              </div>
            )}
          </ul>
        </Section>
      </Card>
      <Card>
        <Title type={surgery.type}>
          <h1>Fotos</h1>
        </Title>
        <Section type={surgery.type}>
          <PhotoList>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </PhotoList>
        </Section>
      </Card>
    </Container>
  );
}
