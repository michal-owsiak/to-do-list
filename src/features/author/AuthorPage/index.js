import Section from "../../../common/Section";
import Header from "../../../common/Header";

export default () => (
  <>
    <Header title="O autorze" />
    <Section
      title="Michał Owsiak"
      mainSectionContent={
        <>
          <p>Hej! Jestem Michał.</p>
          <p>
            Obecnie, pracując na co dzień w korporacji, powolnymi krokami zbliżam się do finiszu swoich studiów
            psychologicznych.
          </p>
          <p>
            Bazą mojej osobowości jest wewnętrzny humanista; myślę jednak, że nie brakuje mi także umysłu analitycznego.
            Lubię badać zjawiska, przyglądać się im z perspektywy analizy statystycznej, wyciągać wnioski na podstawie
            konkretnych, liczbowych danych. To właśnie świadomość zamiłowania do analitycznego postrzegania
            rzeczywistości skłoniła mnie do podjęcia wyzwania, jakim jest <b>nauka programowania.</b>
          </p>
          <p>
            Wybiegając poza zainteresowania psychologiczne, w wolnych chwilach dbam o uprawę własnych warzyw, ziół i
            owoców.
          </p>
        </>
      }
    />
  </>
);