using ElectronixStoreWeb.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace ElectronixStoreWeb.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly ProductsService productService;

        public ProductsController(ProductsService productService)
        {
            this.productService = productService;
        }

        [HttpGet("")]
        public Task<List<Product>> GetProductsAsync([FromQuery] int categoryId = default) =>
            productService.Products
                .Where(x => categoryId == default || x.CategoryId == categoryId)
                .OrderBy(x => x.Name).ToListAsync();

        [HttpGet("{id:int}")]
        public Task<Product> GetProductAsync(int id) =>
            productService.Products.Include(x => x.Images)
                .Include(x => x.Category).FirstAsync(x => x.Id == id);

        [HttpGet("categories")]
        public Task<List<Category>> GetCategoriesAsync() =>
            productService.Categories.OrderBy(x => x.Name).ToListAsync();

        [HttpPost("categories")]
        public Task SaveCategoryAsync([FromBody] Category category) =>
            productService.SaveCategoryAsync(category);

        [HttpGet("categories/{id:int}")]
        public async Task<Category> GetCategoriesAsync(int id)
        {
            var res = await productService.Categories.Include(x => x.Products).FirstAsync(x => x.Id == id);

            return res;
        }

        [HttpPost("")]
        public Task<Product> SaveProductAsync([FromBody] Product product) =>
            productService.SaveProductAsync(product);
    }
}
