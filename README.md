# NEO - Omnichannel commerce platform
![alt-text](https://img.shields.io/badge/version-2.1.0RC-orange.svg "Release Version")

Tema padrão para as novas lojas criadas na plataforma NEO.

*ASP.NET MVC Razor Theme Engine*

## Requisitos

- [Documentação Online](https://neohelp.readme.io/docs)


## Obtendo o Tema 

Clone esse repositório e instale suas dependências:

```bash
git clone https://github.com/davipguimaraes/JetNEO-Theme.git
cd NEO-DefaultTheme
npm install
```

## Iniciando o Desenvolvimento

Dentro da pasta onde o *packages.json* encontra-se, execute o comando
```bash
npm run watch
```
Para iniciar o watcher/compiler dos resources.
Enquanto ele estiver ativo, toda vez que você salvar algum arquivo .js ou .scss dentro da pasta /resources ele automaticamente irá re-compilar o código.

## Compilando para produção

Dentro da pasta onde o *packages.json* encontra-se, execute o comando
```bash
npm run prod
```
Seu código dentro da pasta resources irá ser compilado para produção com minificação e uglifyJS.

## Modelos e Objetos

Nossos modelos e objetos são todos baseados nos retornos da API dos Micro-Serviços. Para obter uma lista atualizada e mais completa dos Objetos e Modelos acesse nossa documentação online de ajuda. (https://neohelp.readme.io/v1/reference)

## Estrutura de Arquvios

```bash
├───assets
│   ├───css
│   │       base.css
│   │       base.css.map
│   │       theme.css
│   │       theme.css.map
│   │       
│   ├───fonts
│   │   └───vendor
│   │       └───sass-semantic-ui
│   │           └───src
│   │               └───icons
│   │                       icons.eot
│   │                       icons.svg
│   │                       icons.ttf
│   │                       icons.woff
│   │                       icons.woff2
│   │                       
│   ├───image
│   │   │   a.txt
│   │   │   email.svg
│   │   │   img_default.png
│   │   │   whats.jpg
│   │   │   
│   │   ├───ads
│   │   │       autralis.png
│   │   │       camping.png
│   │   │       chromecast.png
│   │   │       diadosnamorados.png
│   │   │       galaxys8.png
│   │   │       imaginou.png
│   │   │       starwars.png
│   │   │       
│   │   ├───background
│   │   │       background-azul.jpg
│   │   │       
│   │   ├───banners
│   │   │       banner_chuteira.png
│   │   │       banner_motog.png
│   │   │       banner_notebook.png
│   │   │       
│   │   ├───categorias
│   │   │       acessorios.png
│   │   │       chuteiras.png
│   │   │       eletrodomesticos.png
│   │   │       headphones.png
│   │   │       
│   │   ├───checkout
│   │   │       jet_checkout.svg
│   │   │       logo-checkout.png
│   │   │       
│   │   ├───lista_casamento
│   │   │       img_casamento.png
│   │   │       img_passaros.png
│   │   │       
│   │   ├───logo
│   │   │       jet_logo_branco.png
│   │   │       logo.png
│   │   │       
│   │   ├───marcas
│   │   │       beats.png
│   │   │       brastemp.png
│   │   │       gopro.png
│   │   │       lego.png
│   │   │       nike.png
│   │   │       samsung.png
│   │   │       
│   │   └───selos
│   │           clearsale.png
│   │           comodo.png
│   │           img_973.png
│   │           selo-clearsale.png
│   │           siteblindado.gif
│   │           site_blindado.png
│   │           
│   └───js
│           app.js
│           app.js.map
│           manifest.js
│           manifest.js.map
│           vendor.js
│           vendor.js.map
│           
├───resources
│   ├───js
│   │   │   app.js
│   │   │   bootstrap.js
│   │   │   plugins.js
│   │   │   routes.js
│   │   │   
│   │   ├───api
│   │   │   │   api_config.js
│   │   │   │   _start.js
│   │   │   │   
│   │   │   ├───checkout
│   │   │   │       cart.js
│   │   │   │       entrega_agendada.js
│   │   │   │       identification.js
│   │   │   │       mini_cart.js
│   │   │   │       mini_cart_event_list.js
│   │   │   │       payment.js
│   │   │   │       register.js
│   │   │   │       success.js
│   │   │   │       
│   │   │   ├───customer
│   │   │   │       AccessKey.js
│   │   │   │       AddressManager.js
│   │   │   │       adressEdit.js
│   │   │   │       changeEmail.js
│   │   │   │       contact.js
│   │   │   │       forgot.js
│   │   │   │       login.js
│   │   │   │       newsletter.js
│   │   │   │       register.js
│   │   │   │       
│   │   │   ├───eventlist
│   │   │   │       manager_event_list.js
│   │   │   │       
│   │   │   ├───filter
│   │   │   │       filterManipulation.js
│   │   │   │       
│   │   │   ├───order
│   │   │   │       orderDetail.js
│   │   │   │       
│   │   │   ├───pagination
│   │   │   │       pagination.js
│   │   │   │       
│   │   │   ├───product
│   │   │   │       alertMe.js
│   │   │   │       card.js
│   │   │   │       detail.js
│   │   │   │       detail_b2b.js
│   │   │   │       
│   │   │   └───search
│   │   │           search.js
│   │   │           searchGuest.js
│   │   │           
│   │   ├───functions
│   │   │       checkout.js
│   │   │       correios.js
│   │   │       cpfcnpj.js
│   │   │       form-control.js
│   │   │       jetCheckout.js
│   │   │       jetCorreios.js
│   │   │       loading.js
│   │   │       menu.js
│   │   │       message.js
│   │   │       mini_cart_generic.js
│   │   │       mobile.js
│   │   │       modal.js
│   │   │       money.js
│   │   │       validate.js
│   │   │       zoom.js
│   │   │       
│   │   ├───ui
│   │   │   │   _start.js
│   │   │   │   
│   │   │   ├───modules
│   │   │   │       checkout.js
│   │   │   │       editCustomer.js
│   │   │   │       filters.js
│   │   │   │       floatingMenu.js
│   │   │   │       jquery-ui.js
│   │   │   │       jquery-ui.min.js
│   │   │   │       mask.js
│   │   │   │       menu.js
│   │   │   │       mini_cart.js
│   │   │   │       product.js
│   │   │   │       product_details.js
│   │   │   │       register.js
│   │   │   │       review.js
│   │   │   │       slideshow.js
│   │   │   │       SocialNetwork.js
│   │   │   │       
│   │   │   └───starters
│   │   │           formManipulation.js
│   │   │           
│   │   └───vendors
│   │           semantic-ui.js
│   │           validators.js
│   │           
│   └───sass
│       │   base.scss
│       │   theme.scss
│       │   _semantic_ui.scss
│       │   _variables.scss
│       │   
│       ├───default
│       │   │   theme.scss
│       │   │   
│       │   ├───category
│       │   │       all.scss
│       │   │       _filter.scss
│       │   │       
│       │   ├───checkout
│       │   │       all.scss
│       │   │       _cart.scss
│       │   │       _jetCheckout.scss
│       │   │       
│       │   ├───client_area
│       │   │       all.scss
│       │   │       _delivery_status.scss
│       │   │       _form.scss
│       │   │       _menu.scss
│       │   │       _register.scss
│       │   │       
│       │   ├───eventlist
│       │   │       _all.scss
│       │   │       _eventList.scss
│       │   │       _marriage.scss
│       │   │       
│       │   ├───footer
│       │   │       all.scss
│       │   │       _footer.scss
│       │   │       _pagamento.scss
│       │   │       
│       │   ├───header
│       │   │       all.scss
│       │   │       _header.scss
│       │   │       _topbar.scss
│       │   │       
│       │   ├───helpers
│       │   │   │   all.scss
│       │   │   │   _background.scss
│       │   │   │   _display.scss
│       │   │   │   _margins.scss
│       │   │   │   
│       │   │   └───text
│       │   │           all.scss
│       │   │           _color.scss
│       │   │           _size.scss
│       │   │           _text.scss
│       │   │           
│       │   ├───home
│       │   │       all.scss
│       │   │       _fullBanner.scss
│       │   │       _infobar.scss
│       │   │       _topseller.scss
│       │   │       
│       │   ├───image
│       │   │       all.scss
│       │   │       _image.scss
│       │   │       
│       │   ├───menu
│       │   │   │   all.scss
│       │   │   │   _menuHeader.scss
│       │   │   │   
│       │   │   └───wsmenu
│       │   │           _colors.scss
│       │   │           _mq.scss
│       │   │           _style.scss
│       │   │           
│       │   ├───modification
│       │   │   │   all.scss
│       │   │   │   _mobile.scss
│       │   │   │   _semantic_ui.scss
│       │   │   │   
│       │   │   └───semantic_ui_mods
│       │   │           _border.scss
│       │   │           _breadcrumbs.scss
│       │   │           _buttons.scss
│       │   │           _card.scss
│       │   │           _divider.scss
│       │   │           _dropdown.scss
│       │   │           _form.scss
│       │   │           _grid.scss
│       │   │           _input.scss
│       │   │           _items.scss
│       │   │           _mobile.scss
│       │   │           _positions.scss
│       │   │           _search.scss
│       │   │           _segment.scss
│       │   │           _sticky.scss
│       │   │           _tabs.scss
│       │   │           _tags.scss
│       │   │           _text.scss
│       │   │           
│       │   ├───plugins
│       │   │       all.scss
│       │   │       _datepicker.scss
│       │   │       _easyzoom.scss
│       │   │       _slickslider.scss
│       │   │       
│       │   ├───product
│       │   │       all.scss
│       │   │       _floating_detail.scss
│       │   │       _parcelamento.scss
│       │   │       _product_b2b.scss
│       │   │       _product_card.scss
│       │   │       _product_card_conjunto.scss
│       │   │       _product_detail.scss
│       │   │       _product_list.scss
│       │   │       _tag.scss
│       │   │       
│       │   └───variables
│       │       │   all.scss
│       │       │   _breakpoints.scss
│       │       │   _colors.scss
│       │       │   _menu_colors.scss
│       │       │   _semantic_ui.scss
│       │       │   _variables.scss
│       │       │   
│       │       └───semantic_ui_variables
│       │               _buttons.scss
│       │               _color.scss
│       │               _font.scss
│       │               
│       └───semantic-ui-calendar
│               _semantic-ui-calendar.scss
│               
└───Views
    │   Web.config
    │   _ViewStart.cshtml
    │   
    ├───Brand
    │       Index.cshtml
    │       
    ├───Category
    │       Index.cshtml
    │       
    ├───Checkout
    │       Checkout_Identification.cshtml
    │       Checkout_Register.cshtml
    │       Checkout_Success.cshtml
    │       Index.cshtml
    │       Payment.cshtml
    │       _GetShippingValues.cshtml
    │       _loadCart.cshtml
    │       _loadCartDetalhes.cshtml
    │       _loadMiniCart.cshtml
    │       
    ├───Company
    │       _CommonQuestions.cshtml
    │       _EBit.cshtml
    │       
    ├───Customer
    │       Accesskey.cshtml
    │       ChangeAddress.cshtml
    │       ChangeEmail.cshtml
    │       ChangePassword.cshtml
    │       ChangePasswordToken.cshtml
    │       CheckAccessKey.cshtml
    │       Contact.cshtml
    │       CreateAddress.cshtml
    │       Edit.cshtml
    │       EditAddress.cshtml
    │       FinishRegistration.cshtml
    │       Forgot.cshtml
    │       Index.cshtml
    │       Login.cshtml
    │       LoginB2B.cshtml
    │       Register.cshtml
    │       _Address.cshtml
    │       
    ├───ErrorPages
    │       403.cshtml
    │       404.cshtml
    │       500.cshtml
    │       
    ├───EventList
    │   │   CreateAddress.cshtml
    │   │   CreateList.cshtml
    │   │   Index.cshtml
    │   │   ManagerAddress.cshtml
    │   │   ManagerGuest.cshtml
    │   │   ManagerInvitation.cshtml
    │   │   ManagerList.cshtml
    │   │   ManagerProducts.cshtml
    │   │   NewList.cshtml
    │   │   
    │   └───Loja
    │           ListEventsProducts.cshtml
    │           ResultadoBuscaLista.cshtml
    │           _RodapeLista.cshtml
    │           
    ├───Group
    │       Index.cshtml
    │       
    ├───Home
    │       CustomPageView.cshtml
    │       Index.cshtml
    │       
    ├───HotSite
    │       Event_List-Convites.cshtml
    │       First_hotSite.cshtml
    │       
    ├───Order
    │       Details.cshtml
    │       Index.cshtml
    │       
    ├───Product
    │   ├───Conjunct
    │   │       Details.cshtml
    │   │       _ProductConjunctList.cshtml
    │   │       
    │   └───Details
    │           Details.cshtml
    │           DetailsB2B.cshtml
    │           _AlertMe.cshtml
    │           _AlsoPurchased.cshtml
    │           _BuyingTips.cshtml
    │           _BuyTogether.cshtml
    │           _FloatingBar.cshtml
    │           _FormAlertMe.cshtml
    │           _Gallery.cshtml
    │           _GradeSemSkuB2B.cshtml
    │           _GradeSkuB2B.cshtml
    │           _ItemsViewed.cshtml
    │           _Payment.cshtml
    │           _PaymentHide.cshtml
    │           _RelatedProducts.cshtml
    │           _Shipping.cshtml
    │           _Slide.cshtml
    │           _Variations.cshtml
    │           _VariationsCheckBox.cshtml
    │           _VariationsColor.cshtml
    │           _VariationsDropDown.cshtml
    │           _VariationsImage.cshtml
    │           
    ├───Search
    │       Index.cshtml
    │       
    └───Shared
        │   404.cshtml
        │   500.cshtml
        │   Error.cshtml
        │   
        ├───Base
        │       _Layout.cshtml
        │       _LayoutBreadCrumb.cshtml
        │       _LayoutBreadCrumbContent.cshtml
        │       _LayoutBreadCrumbLeftSideBar.cshtml
        │       _LayoutBreadCrumbTopBar.cshtml
        │       _LayoutCheckout.cshtml
        │       _LayoutListEvents.cshtml
        │       
        ├───Blocks
        │   │   _BoxFacebook.cshtml
        │   │   _InfoBar.cshtml
        │   │   
        │   ├───Atributes
        │   │       _AtributesFilters.cshtml
        │   │       
        │   ├───Banner
        │   │       _BannerBrand.cshtml
        │   │       _BannerCategory.cshtml
        │   │       _BannerGroup.cshtml
        │   │       _CentralHalfBanner.cshtml
        │   │       _FooterHalfBanner.cshtml
        │   │       _FullBanner.cshtml
        │   │       _SideHalfBanner.cshtml
        │   │       
        │   ├───Brand
        │   │       _Brands.cshtml
        │   │       _BrandsFilters.cshtml
        │   │       
        │   ├───Category
        │   │       _CategoriesFilters.cshtml
        │   │       
        │   ├───Group
        │   │       _GroupList.cshtml
        │   │       _Groups.cshtml
        │   │       
        │   ├───Order
        │   │       _StatusOrder.cshtml
        │   │       
        │   └───Product
        │           _FeaturedProducts.cshtml
        │           _PriceFilters.cshtml
        │           _ProductList.cshtml
        │           _ProductListSlider.cshtml
        │           _ProductsCategoryGrid.cshtml
        │           _ProductsCategoryList.cshtml
        │           _ProductsListEvents.cshtml
        │           _ReferencesFilters.cshtml
        │           _TopSellers.cshtml
        │           
        ├───Common
        │       _B2BLink.cshtml
        │       _Cart.cshtml
        │       _CartDetalhes.cshtml
        │       _Cart_Butons_EventList.cshtml
        │       _Cart_Butons_MiniCart.cshtml
        │       _CommonCss.cshtml
        │       _CommonJs.cshtml
        │       _CustomPages.cshtml
        │       _FilterMenu.cshtml
        │       _Footer.cshtml
        │       _Footer_Checkout.cshtml
        │       _GoogleAdwords.cshtml
        │       _GoogleRecaptcha.cshtml
        │       _Head.cshtml
        │       _Header.cshtml
        │       _JetLogo.cshtml
        │       _Menu.cshtml
        │       _Payments_List.cshtml
        │       _Seal.cshtml
        │       _SEO.cshtml
        │       _SocialBar.cshtml
        │       _TopBar.cshtml
        │       
        ├───Object
        │   └───Product
        │           _ProductCartItem.cshtml
        │           _ProductCartItemDetalhes.cshtml
        │           _ProductcartItemMiniCart.cshtml
        │           _ProductConjunctInCard.cshtml
        │           _ProductInCard.cshtml
        │           _ProductInList.cshtml
        │           _ProductInListEvents.cshtml
        │           _ProductQuickView.cshtml
        │           _ProductSimplesInCard.cshtml
        │           
        └───Parts
            │   _GuestPagination.cshtml
            │   _NewPagination.cshtml
            │   _Pagination.cshtml
            │   _PaginationOrder.cshtml
            │   _PaginationProductEventList.cshtml
            │   
            ├───Checkout
            │       _Part_Checkout_Address_Add.cshtml
            │       _Part_Checkout_Address_Manager.cshtml
            │       _Part_Checkout_Carrinho.cshtml
            │       _Part_Checkout_Desconto.cshtml
            │       _Part_Checkout_Discount.cshtml
            │       _Part_Checkout_Frete.cshtml
            │       _Part_Checkout_Gateways.cshtml
            │       _Part_Checkout_Pagamento_Boleto.cshtml
            │       _Part_Checkout_Pagamento_Cartao.cshtml
            │       _Part_Checkout_Pagamento_Cartao_Debito.cshtml
            │       _Part_Checkout_Pagamento_Debito_Redirect.cshtml
            │       _Part_Checkout_Pagamento_Offline.cshtml
            │       _Part_Checkout_Resumo.cshtml
            │       _Part_Checkout_Usuario.cshtml
            │       
            ├───Customer
            │       _Part_Customer_Login.cshtml
            │       _Part_Customer_NewPassword.cshtml
            │       _Part_Customer_Recive_Code.cshtml
            │       
            └───EventList
                │   _BabyShower.cshtml
                │   _BridalShower.cshtml
                │   _ChangeAddress.cshtml
                │   _EditAddressPartial.cshtml
                │   _EventListMenu.cshtml
                │   _Gifts.cshtml
                │   _GuestsList.cshtml
                │   _HouseWarmingParty.cshtml
                │   _ManagerProducts.cshtml
                │   _Marriage.cshtml
                │   _Steps.cshtml
                │   
                └───Search
                        BabyShower.cshtml
                        BridalShower.cshtml
                        Gifts.cshtml
                        HouseWarmingParty.cshtml
                        Marriage.cshtml
```
