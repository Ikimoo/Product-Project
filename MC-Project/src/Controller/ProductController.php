<?php

namespace App\Controller;

use App\Entity\McTableauProduct;
use App\Repository\McTableauProductRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ProductController extends AbstractController
{
    /**
     * @Route("/", name="home")
     */
    public function browse(McTableauProductRepository $mcTableauProductRepository): Response
    {
        return $this->render('product/browse.html.twig', [
            'mcTableauProductRepository' => $mcTableauProductRepository->findAll(),
        ]);
    }
}
