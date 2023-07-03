import Destination from "./DestinationComponents";
import { Card, CardTitle, CardBody, CardSubtitle, CardText, Button} from 'reactstrap'
import './Servise.css'

function Servise () {
    return(
        <div>
        <h1 style={{marginTop: '100px'}}>Наши Услуги</h1>
        <div style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap'}}>
        <Card
  style={{
    width: '20rem',
    marginTop: '50px'
  }}
>
  <img
    alt="Sample"
    src="https://gosvent.ru/wp-content/uploads/blockage-2.jpg"
  />
  <CardBody>
    <CardTitle tag="h5">
    Устранение Засоров 
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
    </CardSubtitle>
    <CardText>
      От 150 000 UZS
    </CardText>
  </CardBody>
</Card>

<Card
  style={{
    width: '20rem',
    marginTop: '50px'
  }}
>
  <img
    alt="Sample"
    src="https://1.bp.blogspot.com/-TceGZmbzLvk/XdKS3PDwdpI/AAAAAAAB_Mk/7Rammsj7mhYy7yleVnkKucyxcz9vXD0bwCLcBGAsYHQ/s1600/%25D0%25A1%25D0%25B0%25D0%25BD%25D1%2582%25D0%25B5%25D1%2585%25D0%25BD%25D0%25B8%25D0%25BA%2B%25D0%259C%25D0%25BE%25D1%2581%25D0%25BA%25D0%25B2%25D0%25B0%2B118.png"
  />
  <CardBody>
    <CardTitle tag="h5">
    
    </CardTitle>
    Установка сантехники
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
    </CardSubtitle>
    <CardText>
    От 150 000 UZS
    </CardText>
  </CardBody>
</Card>

<Card
  style={{
    width: '20rem',
    marginTop: '50px',
  }}
>
  <img
    alt="Sample"
    src="https://dommaster.kh.ua/wp-content/uploads/2018/06/chistka.jpg"
  />
  <CardBody>
    <CardTitle tag="h5">
    
    </CardTitle>
    Прочистка канализации
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >

    </CardSubtitle>
    <CardText>
    От 150 000 UZS
    </CardText>
  </CardBody>
</Card>

<Card
  style={{
    width: '20rem',
    marginTop: '50px'
  }}
>
  <img
    alt="Sample"
    src="https://tze1.ru/upload/img/18-12-18_1.jpg"
  />
  <CardBody>
    <CardTitle tag="h5">
    Ремонт труб
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
    </CardSubtitle>
    <CardText>
    От 150 000 UZS
    </CardText>
  </CardBody>
</Card>

<Card
  style={{
    width: '20rem',
    marginTop: '50px'
  }}
>
  <img
    alt="Sample"
    src="https://sovety-vannoy.ru/wp-content/uploads/2017/06/1.jpg"
  />
  <CardBody>
    <CardTitle tag="h5">
    Установка смесителя
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      От 150 000 UZS
    </CardSubtitle>
    <CardText>
    </CardText>
  </CardBody>
</Card>

<Card
  style={{
    width: '20rem',
    marginTop: '50px'
  }}
>
  <img
    alt="Sample"
    src="https://kolomna.master-servic.ru/wp-content/uploads/sites/104/45fghdg.jpg
    "
  />
  <CardBody>
    <CardTitle tag="h5">
    Устранение протечек
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      От 150 000 UZS
    </CardSubtitle>
  </CardBody>
</Card>

<Card
  style={{
    width: '20rem',
    marginTop: '50px'
  }}
>
  <img
    alt="Sample"
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm2xnmVHdR6lpTUXcilXR_4ih1QHn8gDbz7w&usqp=CAU"
  />
  <CardBody>
    <CardTitle tag="h5">
    Установка унитаза
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      от 300 000 UZS
    </CardSubtitle>
  </CardBody>
</Card>

<Card
  style={{
    width: '20rem',
    marginTop: '50px'
  }}
>
  <img
    alt="Sample"
    src="https://cersanit.ru/upload/medialibrary/894/kak_ustanovit_vanny_4.png"
  />
  <CardBody>
    <CardTitle tag="h5">
    Установка ванны
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      от 300 000 UZS
    </CardSubtitle>
  </CardBody>
</Card>

<Card
  style={{
    width: '20rem',
    marginTop: '50px'
  }}
>
  <img
    alt="Sample"
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxVNuGGs-MYz9cVg4tBxUKeWHf5Q5X0-97j-Sj2V4xmgUDjwY_-lE75MkrWp1DEtrBWEU&usqp=CAU"
  />
  <CardBody>
    <CardTitle tag="h5">
    Установка душевой кабины
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      от 500 000 UZS
    </CardSubtitle>
  </CardBody>
</Card>

<Card
  style={{
    width: '20rem',
    marginTop: '50px'
  }}
>
  <img
    alt="Sample"
    src="https://vannayasovety.ru/wp-content/uploads/2016/07/Vannyi-s-gidromassazhem.jpg"
  />
  <CardBody>
    <CardTitle tag="h5">
    Установка джакузи
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      от 500 000 UZS
    </CardSubtitle>
  </CardBody>
</Card>

<Card
  style={{
    width: '20rem',
    marginTop: '50px'
  }}
>
  <img
    alt="Sample"
    src="https://eurokonus.com.ua/image/cache/catalog/blog/news/11-03-2020/tekst-9-ustanovka-bide-1277.png"
  />
  <CardBody>
    <CardTitle tag="h5">
    Установка биде
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      от 300 000 UZS
    </CardSubtitle>
  </CardBody>
</Card>

<Card
  style={{
    width: '20rem',
    marginTop: '50px'
  }}
>
  <img
    alt="Sample"
    src="https://masternadom.org/demo/plumber/ustanovka-unitaza.jpg"
  />
  <CardBody>
    <CardTitle tag="h5">
    Ремонт унитаза
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      от 150 000 UZS
    </CardSubtitle>
  </CardBody>
</Card>

<Card
  style={{
    width: '20rem',
    marginTop: '50px'
  }}
>
  <img
    alt="Sample"
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIhOnzA6KvTy-RtHJAAOCsT-QplKOaH4Or2w&usqp=CAU"
  />
  <CardBody>
    <CardTitle tag="h5">
    Замена канализации
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      от 500 000 UZS
    </CardSubtitle>
  </CardBody>
</Card>

<Card
  style={{
    width: '20rem',
    marginTop: '50px'
  }}
>
  <img
    alt="Sample"
    src="https://stroychik.ru/wp-content/uploads/2020/12/ustanovka-sifona.jpg"
  />
  <CardBody>
    <CardTitle tag="h5">
    Установка сифона
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      от 150 000 UZS
    </CardSubtitle>
  </CardBody>
</Card>



<Card
  style={{
    width: '20rem',
    marginTop: '50px'
  }}
>
  <img
    alt="Sample"
    src="https://kotel24.com/uploads/uslugi-montaga/montaj_gazovogo_kotla.png?1496238540550"
  />
  <CardBody>
    <CardTitle tag="h5">
    Установка котла
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
    </CardSubtitle>
    <CardText>
    от 600 000 UZS
    </CardText>
  </CardBody>
</Card>
        </div>
        <div>
        <h1 style={{marginTop: '100px'}}>Чинка Кондиционеров</h1>
        <div style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap'}}>

<Card
  style={{
    width: '20rem',
    marginTop: '50px'
  }}
>
  <img
    alt="Sample"
    src="https://www.willmoda.uz/upload/iblock/1a8/1a8e8dce4de0df9a2073890c005592a0.jpg"
  />
  <CardBody>
    <CardTitle tag="h5">
    Установка кондиционеров
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
    </CardSubtitle>
    <CardText>
      От 150 000 UZS
    </CardText>
  </CardBody>
</Card>

<Card
  style={{
    width: '20rem',
    marginTop: '50px'
  }}
>
  <img
    alt="Sample"
    src="https://mttservice.net/storage/texnika-temiri/January2022/kond%20temiri%201-ci%20sekil1.jpg"
  />
  <CardBody>
    <CardTitle tag="h5">
    Ремонт агригат
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
    </CardSubtitle>
    <CardText>
      От 150 000 UZS
    </CardText>
  </CardBody>
</Card>

<Card
  style={{
    width: '20rem',
    marginTop: '50px'
  }}
>
  <img
    alt="Sample"
    src="https://scu.com.ua/image/catalog/blog/air-conditioner-refrigerant.jpg"
  />
  <CardBody>
    <CardTitle tag="h5">
    Заправка Фреона
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
    </CardSubtitle>
    <CardText>
      От 150 000 UZS
    </CardText>
  </CardBody>
</Card>

<Card
  style={{
    width: '20rem',
    marginTop: '50px'
  }}
>
  <img
    alt="Sample"
    src="https://split34.ru/wp-content/uploads/2019/05/59680587.rq60ptv4bo.W665.jpg"
  />
  <CardBody>
    <CardTitle tag="h5">
    Добавить Фреон
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
    </CardSubtitle>
    <CardText>
      От 150 000 UZS
    </CardText>
  </CardBody>
</Card>

<Card
  style={{
    width: '20rem',
    marginTop: '50px'
  }}
>
  <img
    alt="Sample"
    src="https://split34.ru/wp-content/uploads/2019/05/59680587.rq60ptv4bo.W665.jpg"
  />
  <CardBody>
    <CardTitle tag="h5">
    Менять мотор кондиционера
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
    </CardSubtitle>
    <CardText>
      От 150 000 UZS
    </CardText>
  </CardBody>
</Card>

<Card
  style={{
    width: '20rem',
    marginTop: '50px'
  }}
>
  <img
    alt="Sample"
    src="https://holodservice.net/storage/uploads/images/chistka-konditsionerov.jpg"
  />
  <CardBody>
    <CardTitle tag="h5">
    Очистка агригат и фена кондиционера
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
    </CardSubtitle>
    <CardText>
      От 150 000 UZS
    </CardText>
  </CardBody>
</Card>

<Card
  style={{
    width: '20rem',
    marginTop: '50px'
  }}
>
  <img
    alt="Sample"
    src="https://koenigclimat.ru/image/catalog/2020/007/chistka(2).jpg"
  />
  <CardBody>
    <CardTitle tag="h5">
    Установка фена для кондиционера
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
    </CardSubtitle>
    <CardText>
      От 150 000 UZS
    </CardText>
  </CardBody>
</Card>

<Card
  style={{
    width: '20rem',
    marginTop: '50px'
  }}
>
  <img
    alt="Sample"
    src=""
  />
  <CardBody>
    <CardTitle tag="h5">
    Менять местоположение кондиционера
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
    </CardSubtitle>
    <CardText>
      От 150 000 UZS
    </CardText>
  </CardBody>
</Card>

        </div>

        
        </div>
        
        

        </div>

        

    )
}


export default Servise;