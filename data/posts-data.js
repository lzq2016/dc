var menu_database = [
    {
        menuImg: "http://xxy1978.oss-cn-shenzhen.aliyuncs.com/menu/menuList/1.JPG",
        flavor: "辣可口",
        title: "咖喱猪扒鸡肉饭",
        price: "50",
        stock: "99",
        usereat: 38,
        standard: {"1":"超辣","0":"微辣","2":"无辣"},
        sizes: {"小份": 50,"中份": 60,"大份": 70},
        dishid: 0
    },

    {
        menuImg: "http://xxy1978.oss-cn-shenzhen.aliyuncs.com/menu/menuList/6.jpg",
        flavor: "香可口",
        title: "扒鸡肉饭",
        price: "280",
        stock: "99",
        usereat: 38,        
        standard: { "1": "超辣", "0": "微辣", "2": "无辣" },
        sizes: { "小份": 50, "中份": 60, "大份": 70 },       
        dishid: 1
    },

    {
        menuImg: "http://xxy1978.oss-cn-shenzhen.aliyuncs.com/menu/menuList/2.jpg",
        flavor: "可口",
        title: "鬼D米菜哇",
        price: "123",
        standard: '[{"0":"小份","1":"中份","2":"大份","3":"超大份","name":"份量","code":"cm"},{"1":"超辣","0":"微辣","2":"无辣","name":"口味","code":"ys"}]',
        storeTotal: 100,
        rid: "34",
        rn: "3号店",
        dishid: 2,
    },

    {
        menuImg: "http://xxy1978.oss-cn-shenzhen.aliyuncs.com/menu/menuList/3.jpg",
        flavor: "香辣可口",
        title: "肉饭",
        price: "10",
        dishid: 3,
        rid: "35",
        rn: "4号店"
    },

    {
        menuImg: "http://xxy1978.oss-cn-shenzhen.aliyuncs.com/menu/menuList/4.jpg",
        flavor: "香辣可口",
        title: "咖喱",
        price: "1110",
        standard: '[{"0":"小份","1":"中份","2":"大份","3":"超大份","name":"份量","code":"cm"},{"1":"超辣","0":"微辣","2":"无辣","name":"口味","code":"ys"}]',
        storeTotal: 10000,
        dishid: 4,
        rid: "36",
        rn: "5号店"
    },
    {
        menuImg: "http://xxy1978.oss-cn-shenzhen.aliyuncs.com/menu/menuList/6.jpg",
        flavor: "香辣可口",
        title: "猪扒",
        price: "112",
        standard: '[{"0":"小份","1":"中份","2":"大份","3":"超大份","name":"份量","code":"cm"},{"1":"超辣","0":"微辣","2":"无辣","name":"口味","code":"ys"}]',
        storeTotal: 59,
        dishid: 5,
        rid: "37",
        rn: "6号店",
        rn3:"9号店"
    },
]

module.exports = {
    postList: menu_database
}