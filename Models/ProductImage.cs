namespace ElectronixStoreWeb.Models
{
    public class ProductImage
    {
        public int Id { get; set; }
        public int ProductId { get; set; }
        public virtual Product Product { get; set; }
        public string Base64 { get; set; }
    }
}
