using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace VMProducts.Models
{
    public class ProductsModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public double Price { get; set; }
        public int Qty { get; set; }
        public string Image { get; set; }
    }
}