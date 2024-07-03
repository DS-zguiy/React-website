import { useState } from "react";
import { Form } from "react-router-dom";

interface ContactProps {
  first: string;
  last: string;
  avatar: string;
  twitter: string;
  notes: string;
  favorite: boolean;
}

// const contact: ContactProps = {
//   first: "Your",
//   last: "Name",
//   avatar: "https://robohash.org/you.png?size=200x200",
//   twitter: "your_handle",
//   notes: "Some notes",
//   favorite: true,
// };




let id = 1
const Contact: React.FC = () => {


  const [contact, setContact] = useState({
    first: "Your",
    last: "Name",
    num: 1,
    avatar: "https://robohash.org/you.png?size=200x200",
    twitter: "your_handle",
    notes: "Some notes",
    favorite: true,
  })


  const handleClick = () => {
    setContact({
      ...contact,
      num: id += 1,
    })
  }

  const imgData = {

    src: contact.avatar ||
      `https://robohash.org/${contact.first}${contact.last}.png?size=200x200`


  }


  return (
    <div id="contact">
      <div>
        <img
          key={contact.avatar}
          {...imgData}
          alt={`${contact.first} ${contact.last}`}
        />
      </div>

      <div>
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          <Favorite contact={contact} />
        </h1>

        {contact.twitter && (
          <p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://twitter.com/${contact.twitter}`}
            >
              {contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && <p>{contact.num}</p>}

        <div>

          <button onClick={() => { handleClick() }}>change</button>
        </div>
      </div>
    </div>
  );
};

interface FavoriteProps {
  contact: ContactProps;
}

const Favorite: React.FC<FavoriteProps> = ({ contact }) => {
  const favorite = contact.favorite;
  return (
    <Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={
          favorite
            ? "Remove from favorites"
            : "Add to favorites"
        }
      >
        {favorite ? "★" : "☆"}
      </button>
    </Form>
  );
};

export default Contact;
