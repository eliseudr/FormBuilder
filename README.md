*FORM BUILDER* ( Simple API + Validation)
## --------------------------------------------------------------------------------##  
HOW TO RUN THIS CODE

1 - Download or clone this repository,  
2 - Create the [Database](https://github.com/eliseudr/FormBuilder/tree/master/database)  
3 - *npm install*  
4 - Change the function getSequelize to your SQL settings, your username and password.  
5 - *npm start* to iniciate the API

## --------------------------------------------------------------------------------##

This API is contains 3 Endpoint at the moment

# "/form_config" *Set rules for validation*
# "/build_form" *Create the form* - 
  Obs: this end point dont include the info about the form
# "/form_info" *Associate the Data with the relative Form* - 
  This can be optimized latter adding an exact number of information to be added this way the Endpoint will be called only one time.

form_config  

![](https://github.com/eliseudr/FormBuilder/blob/master/images/Endpoint_formconfig.png)

this Endpoint set the following values,  
  "texto_tam_exato": The exact size for the field 'TEXT', (Be carefull with this),   
  "texto_tam_minimo": A minimum size for the 'Text',  
  "texto_tam_maximo": A maximum size for the 'Text',  
  "texto_palavras_min": A minimum amount of words, this is only used on the table 'form_info'.  
  "texto_palavras_max": A maximum amount of words.      
  "email_dominio": The domain of emails that will be accepted, Ex: "hotmail.com, gmail.com",  
  "data_minima": The minimun date for the form,  
  "data_maxima": The maximum date for the form,  
  "qtd_respostas_min": The amount of answer, Default = 1.  
  "qtd_respostas_max": The maximun amount of answer.  
  
  *This is how it will look on the Database*  
  
  ![](https://github.com/eliseudr/FormBuilder/blob/master/images/db_formconfig.png)  
  
  You can check the rest of images here [Images Endpoints and Database](https://github.com/eliseudr/FormBuilder/tree/master/images)  
  