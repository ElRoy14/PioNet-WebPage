using Microsoft.AspNetCore.Mvc;
using PIONET_webPage.Models;
using System.Diagnostics;

namespace PIONET_webPage.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly IConfiguration _configuration;

        public HomeController(ILogger<HomeController> logger, IConfiguration configuration)
        {
            _logger = logger;
            _configuration = configuration;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult AboutUs()
        {
            return View();
        }

        public IActionResult Service()
        {
            return View();
        }

        public IActionResult Contact()
        {

            string serviceId = _configuration["ServiceId"];
            string templateId = _configuration["TemplateId"];
            string apiKeyId = _configuration["ApiKey"];

            ViewBag.ServiceId = serviceId;
            ViewBag.TemplateId = templateId;
            ViewBag.ApiKey = apiKeyId;

            return View();
        }

        public JsonResult GetCredentials()
        {

            string serviceId = _configuration["ServiceId"];
            string templateId = _configuration["TemplateId"];
            string apiKey = _configuration["ApiKey"];

            return Json(new
            {
                serviceId = serviceId,
                templateId = templateId,
                apiKey = apiKey
            });
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
