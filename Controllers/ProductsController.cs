using ElectronixStoreWeb.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
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

        [HttpGet("")]
        public Task<List<Product>> GetProductsAsync() =>
            productService.Products.ToListAsync();

        [HttpGet("{id:int}")]
        public Task<Product> GetProductAsync(int id) =>
            productService.Products.Include(x => x.Images)
                .Include(x => x.Category).FirstAsync(x => x.Id == id);

        [HttpGet("categories")]
        public Task<List<Category>> GetCategoriesAsync() =>
            productService.Categories.ToListAsync();

        [HttpPost("categories")]
        public Task SaveCategoryAsync([FromBody] Category category) =>
            productService.SaveCategoryAsync(category);

        [HttpGet("categories/{id:int}")]
        public Task<Category> GetCategoriesAsync(int id) =>
            productService.Categories.Include(x => x.Products).FirstAsync(x => x.Id == id);
    }
}
