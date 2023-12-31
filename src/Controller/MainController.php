<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MainController extends AbstractController
{
    #[Route('/main', name: 'app_main')]
    #[Route('/', name: 'homepage')]
    public function index(): Response
    {
        return $this->render('main/index.html.twig', [
            'controller_name' => 'MainController',
        ]);
    }
    #[Route('/login', name: 'app_login')]
    public function getLoginPage(): Response
    {
        return $this->render('main/login.html.twig', [
            'controller_name' => 'MainController',
        ]);
    }

    #[Route('/signup', name: 'app_signup')]
    public function getSignupPage(): Response
    {
        return $this->render('main/signup.html.twig', [
            'controller_name' => 'MainController',
        ]);
    }
    #[Route('/dashboard', name: 'app_dashboard')]
    public function getDashboardPage(): Response
    {
        return $this->render('main/dashboard.html.twig', [
            'controller_name' => 'MainController',
        ]);
    }
}