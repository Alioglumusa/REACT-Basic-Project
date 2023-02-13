import './App.css';
import Card from './Card';

function App() {
  return (
    <div className="wrapper">
      <Card 
      img="https://images.pexels.com/photos/11739206/pexels-photo-11739206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      title="Wolf"
      description="With an average weight of 40 kg in males and 37 kg in females, wolves are the largest living members of the canidae family. Their height varies between 105 and 106 cm, while their shoulder height is between 80 and 85 cm."
      />
      <Card 
      img="https://images.pexels.com/photos/2295744/pexels-photo-2295744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      title="Fox"
      description="With their agile body structures, they move quickly, smell very well and have a strong sense of hearing. It is possible to say that they are good hunters with these features. They hunt animals such as rabbits, mice, chickens, and birds."
      />
      <Card 
      img="https://images.pexels.com/photos/1524628/pexels-photo-1524628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      title="Zebra"
      description="Zebra (Hippotigris) is the common name of several living species with distinctive black and white stripes that cover their entire body, classified in the equine family (Equidae), found in Africa."
      />
    </div>
  );
}

export default App;
