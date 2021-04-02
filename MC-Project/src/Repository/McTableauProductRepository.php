<?php

namespace App\Repository;

use App\Entity\McTableauProduct;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method McTableauProduct|null find($id, $lockMode = null, $lockVersion = null)
 * @method McTableauProduct|null findOneBy(array $criteria, array $orderBy = null)
 * @method McTableauProduct[]    findAll()
 * @method McTableauProduct[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class McTableauProductRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, McTableauProduct::class);
    }

    // /**
    //  * @return McTableauProduct[] Returns an array of McTableauProduct objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('m')
            ->andWhere('m.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('m.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?McTableauProduct
    {
        return $this->createQueryBuilder('m')
            ->andWhere('m.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
