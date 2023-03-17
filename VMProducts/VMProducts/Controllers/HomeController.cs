using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Mvc;
using VMProducts.Models;
using Newtonsoft.Json;

namespace VMProducts.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";

            return View();
        }

        List<ProductsModel> products = new List<ProductsModel>()
        {
            new ProductsModel { Id = 1, Name = "AlooBhujia", Price = 2.50, Qty = 2, Image = "AlooBhujia.JFIF" },
            new ProductsModel { Id = 2, Name = "Lays Chips Salted", Price = 1.00, Qty = 2, Image = "LaysSalt.JFIF" },
            new ProductsModel { Id = 3, Name = "Lays Classic", Price = 2.25, Qty = 2, Image = "LaysClassic.jpg" },
            new ProductsModel { Id = 4, Name = "Lays Masala", Price = 0.25, Qty = 2, Image = "LaysMasala.PNG" },
            new ProductsModel { Id = 5, Name = "Bingo Masala", Price = 1.25, Qty = 2, Image = "BingoMasala.PNG" },
            new ProductsModel { Id = 6, Name = "Bingo Spicy", Price = 1.50, Qty = 2, Image = "BingoSpicy.JFIF" },
            new ProductsModel { Id = 7, Name = "BingoYummitos", Price = 2.00, Qty = 2, Image = "BingoYummitos.JFIF" },
            new ProductsModel { Id = 8, Name = "Gennies", Price = 0.75, Qty = 1, Image = "Gennies.JFIF" }
        };
        public string[] mydata = { "abc", "cdf", "efg" };

        public string[] getData()
        {
            return mydata;
        }

        // GET api/values
        public string GetAllProducts()
        {
            var json = JsonConvert.SerializeObject(products);
            return json;
        }

        // GET api/values/5
        public ProductsModel GetProductById(int id)
        {
            var product = products.FirstOrDefault((p) => p.Id == id);
            if (product == null)
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
            return product;
        }

        // POST api/values
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
