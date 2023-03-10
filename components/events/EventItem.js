import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import DateIcon from "../icons/date-icon";

import Button from "../ui/Button";
import classes from "./event-item.module.css";

import Image from 'next/image';

const EventItem = (props) => {
  const { title, image, date, location, id } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formatedAddress = location.replace(", ", "\n");

  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <Image src={"/" + image} alt={title} width={360} height={360} />
      <div className={classes.content}>
        <h2>{title}</h2>
        <div className={classes.date}>
          <DateIcon />
          <time>{humanReadableDate}</time>
        </div>
        <div className={classes.address}>
          <AddressIcon />
          <address>{formatedAddress}</address>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore it..</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
