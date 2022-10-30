import { Form } from './ContactForm/ContactForm';
import { Section } from './Section/Section';
import { PhoneList } from './PhoneList/PhoneList';
import { Filter } from './ContactFilter/ContactFilter';

export const App = () => {
  return (
    <>
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        <Filter />
        <PhoneList />
      </Section>
    </>
  );
};
