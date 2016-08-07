var config = {
   entry: './main.jsx',
	
   output: {
      path:'./',
      filename: 'index.jsx',
   },
	
   devServer: {
      inline: true,
      port: 8080
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
				
            query: {
               presets: ['es2015', 'react','stage-2'],
               plugins: ["transform-object-assign", "transform-class-properties"]
            }
         }
      ]
   }
}

module.exports = config;