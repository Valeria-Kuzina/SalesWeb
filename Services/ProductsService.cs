using ElectronixStoreWeb.Database;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace ElectronixStoreWeb.Controllers
{
    public class ProductsService
    {
        private readonly ApplicationContext applicationContext;

        public ProductsService(ApplicationContext applicationContext)
        {
            this.applicationContext = applicationContext;
        }

        public IQueryable<Product> Products =>
            applicationContext.Products.AsNoTracking();
    }
}
