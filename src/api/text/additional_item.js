import { publicRoutes } from '../../constans/routes';
import { Additional_nav_1, Additional_nav_2, Additional_nav_3, Additional_nav_4, Additional_nav_5, Additional_nav_6, Additional_nav_7 } from '../../assets/svg/Additional_navigate';


export const additional_item = function additional_item(props) {
    let additional_items = [{
        id: 0,
        name: 'Кукурудза',
        svg: Additional_nav_1,
        path: publicRoutes.CORN,
    },
    {
        id: 1,
        name: 'Пшениця/зернові',
        svg: Additional_nav_2,
        path: publicRoutes.CROPS,
    },
    {
        id: 2,
        name: 'Бобові',
        svg: Additional_nav_3,
        path: publicRoutes.BEANS,
    },
    {
        id: 3,
        name: 'Сади та ягідники',
        svg: Additional_nav_4,
        path: publicRoutes.GARDEN,
    },
    {
        id: 4,
        name: 'Овочі',
        svg: Additional_nav_5,
        path: publicRoutes.VEGETABLES,
    },
    {
        id: 5,
        name: 'No Till',
        svg: Additional_nav_6,
        path: publicRoutes.NOTILL,
    },
    {
        id: 6,
        name: 'Органічне землеробство',
        svg: Additional_nav_7,
        path: publicRoutes.AGRICULTURE,
    },];

    return additional_items;
};