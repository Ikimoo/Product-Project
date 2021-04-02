<?php

namespace App\DataFixtures;

use App\Entity\McTableauProduct;
use Faker\Factory;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        // $product = new Product();
        // $manager->persist($product);

        $faker = Factory::create('fr_FR');

        for ($i = 1; $i < 67; $i++) {

            $product = new McTableauProduct();
            $product->setName($faker->lastname())
                    ->setReference($faker->currencyCode(). "-" . mt_rand(100,900))
                    ->setPrice($faker->randomFloat(2, 1, 50));
            
            $manager->persist($product);
            $manager->flush();
        }
        

    }
}
