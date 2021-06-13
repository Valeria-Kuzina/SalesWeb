using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ElectronixStoreWeb.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SampleController : ControllerBase
    {
        private static readonly Random random = new Random();

        public SampleController()
        {
        }

        [HttpGet]
        public IEnumerable<Sample> Get()
        {
            return Enumerable.Range(1, 5)
                .Select(index => new Sample
            {
                Code = random.Next(10)
            })
            .ToArray();
        }
    }
}
