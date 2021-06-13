using ElectronixStoreWeb.Database;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ElectronixStoreWeb.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly ProductsService productService;

        public ProductsController(ProductsService productService)
        {
            this.productService = productService;
        }

        [HttpGet]
        public Task<List<Product>> GetProductsAsync() =>
            productService.Products.ToListAsync();
    }
}
