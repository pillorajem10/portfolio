import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import InfoIcon from '@material-ui/icons/Info';


export const data = {
  services:[
    {
      name:'E-commerce',
      icon: <AddShoppingCartIcon fontSize="large"/>,
      description:'I Will help your business to sell your products online with attractive UI design and solid UX provided with payment integration and secured data of the business, customers'
    },
    {
      name:'Bookings/Reservation',
      icon: <RestaurantIcon fontSize="large"/>,
      description:'Hotel, Restaurant, Car, etc. Bookings/Reservation website will help your business to reserve or book into your facility in easy way provided with payment integration and services of your business'
    },
    {
      name:'Service web page',
      icon: <InfoIcon fontSize="large"/>,
      description:'I Will help your business to create a static website with high quality and attractive UI to show the web the services and information of your business to inform customers'
    },
  ],
}
