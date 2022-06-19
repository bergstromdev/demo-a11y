import styled from 'styled-components';
import { PageSection } from '../PageSection';

const Table = styled.table`
  margin-top: 2rem;
  width: 100%;
`;

const TableHead = styled.thead``;

const TableHeadCell = styled.th`
  text-align: left;
  padding: 0.5rem;
`;

const TableBody = styled.tbody`
  tr:nth-child(odd) {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const TableRow = styled.tr``;

const TableCell = styled.td`
  text-align: left;
  vertical-align: top;
  padding: 0.5rem;
`;

export const VoiceOverCheatSheet = () => {
  return (
    <PageSection aria-describedby="cheatsheet-heading">
      <h2 id="cheatsheet-heading">VoiceOver cheatsheet</h2>
      <p>Cheatsheet för de vanligaste sakerna i VoiceOver.</p>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell>Kommando</TableHeadCell>
            <TableHeadCell>Tangentbord</TableHeadCell>
            <TableHeadCell>Beskrivning</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Starta/stoppa VoiceOver</TableCell>
            <TableCell>Command + F5</TableCell>
            <TableCell>Startar och stoppar VoiceOver</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Aktiveringstangenter</TableCell>
            <TableCell>Control + Option eller CapsLock</TableCell>
            <TableCell>
              Tangentbordskombination för VoiceOver kommandon.
              <br /> Förkortas VO i kommande kommandon
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Öppna rotor</TableCell>
            <TableCell>VO + U</TableCell>
            <TableCell>Öppna VoiceOver rotor.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Börja läsa</TableCell>
            <TableCell>VO + A</TableCell>
            <TableCell>VoiceOver börjar att läsa sidan.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Sluta läsa</TableCell>
            <TableCell>Control</TableCell>
            <TableCell>VoiceOver slutar att läsa sidan.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Läs nästa</TableCell>
            <TableCell>VO + pil höger</TableCell>
            <TableCell>VoiceOver läser nästa sak på sidan.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Läs förra</TableCell>
            <TableCell>VO + pil vänster</TableCell>
            <TableCell>VoiceOver läser föregående sak på sidan.</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </PageSection>
  );
};
