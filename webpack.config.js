const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
  entry:{
    index:'./src/index.js',
    home: './src/home.js',
    login:'./src/login.js',
  },

  output:{
    clean:true,
    path: path.resolve(__dirname, 'docs'),
  },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'login.html',
       template:'./src/templates/login.html',
       
         chunks:["login"]
     
       }),
      
    
       new HtmlWebpackPlugin({
        filename: 'onboard1.html',
        template:'./src/templates/onboarding1.html',
       
       }),

      

    
       new HtmlWebpackPlugin({
        filename: 'setting.html',
        template:'./src/templates/setting.html',
     
       }),
    

       new HtmlWebpackPlugin({
        filename: 'home.html',
        template:'./src/templates/home.html',

     chunks:['home']
       })
       
    ],
    module: {
        rules: [
            {
             
              test: /\.(s[ac]|c)ss$/i,
              use: [          
                "style-loader",
                "css-loader",
                "sass-loader",
   
               
              ],
            },
        ],
},
}